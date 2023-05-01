/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Book;
import com.store.book.model.Category;
import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.model.User;
import com.store.book.repository.BookRepository;
import com.store.book.repository.CategoryRepository;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import com.store.book.repository.UserRepository;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author nhat
 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class BookController {

    int BookId;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;
    private static final String UPLOAD_DIR_COVER = System.getProperty("user.dir") + "/cover/";
    private static final String UPLOAD_DIR_PDF = System.getProperty("user.dir") + "/pdf/";
    private static final String DELETE_DIR_COVER = System.getProperty("user.dir") + "/cover/";
    private static final String DELETE_DIR_PDF = System.getProperty("user.dir") + "/pdf/";

    @RequestMapping(value = "book", method = RequestMethod.GET)
    public List<Book> getAllFeature() {
        List<Book> list = bookRepository.findAll();
        return list;
    }

    @RequestMapping(value = "book/user/{username}", method = RequestMethod.GET)
    public List<Book> getByUser(@PathVariable String username) {
        List<Book> books = bookRepository.findByUsername(username);
        return books;
    }

    @GetMapping(value = "/pdf/{fileId}", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getFile(@PathVariable String fileId) throws IOException {
        String filePath = "pdf/" + fileId + ".pdf";
        File file = new File(filePath);
        InputStream inputStream = new FileInputStream(file);
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + fileId);
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(inputStreamResource);
    }

    @GetMapping(value = "/cover/{fileId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage(@PathVariable String fileId) throws IOException {
        String filePath = "cover/" + fileId + ".jpg";
        File file = new File(filePath);
        InputStream inputStream = new FileInputStream(file);
        InputStreamResource inputStreamResource = new InputStreamResource(inputStream);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + fileId);
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.IMAGE_JPEG)
                .body(inputStreamResource);
    }

    @RequestMapping(value = "book/category/{categoryId}", method = RequestMethod.GET)
    public List<Book> getByCategory(@PathVariable int categoryId) {
        List<Book> books = bookRepository.getByCategoryId(categoryId);
        return books;
    }

    @RequestMapping(value = "book/bookDetail/{bookId}", method = RequestMethod.GET)
    public Book getByBookId(@PathVariable int bookId) {
        Book book = bookRepository.getByBookId(bookId); 
        return book;
    }

    @RequestMapping(value = "book/createdBy/{bookId}", method = RequestMethod.GET)
    public String getCreatedBy(@PathVariable int bookId) {
        Book book = bookRepository.getByBookId(bookId); 
        return book.getCreatedBy().getUsername();
    }
    
    @PostMapping(value = "/book/update")
    public ResponseEntity<String> updatePublish(@RequestBody Book book) {
        Book temp = bookRepository.getByBookId(book.getBookId());
        if (temp == null) {
            return ResponseEntity.notFound().build();
        }
        temp.setIsApproved(1);
        bookRepository.save(temp);
        return ResponseEntity.ok("User information updated successfully");
    }

    @PostMapping("book/update/information/{categoryId}")
    public ResponseEntity<String> updateBookInformation(@RequestBody Book book, @PathVariable("categoryId") int categoryId) {
        // Lưu thông tin book
        Book foundBook = bookRepository.getByBookId(book.getBookId());
        foundBook.setTitle(book.getTitle());
        foundBook.setAuthorName(book.getAuthorName());
        foundBook.setDescription(book.getDescription());
        foundBook.setPrice(book.getPrice());
        bookRepository.save(foundBook);
        System.out.println();
        categoryRepository.update_Book_Category(categoryId, foundBook.getBookId());
        return ResponseEntity.ok().build();
    }

    @PostMapping("book/update/upload/pdf")
    public void updatePdf(
            @RequestParam("pdfPath") MultipartFile pdfFile,
            @RequestParam("bookId") String bookId
    ) {
        Book foundBook = bookRepository.getByBookId(Integer.parseInt(bookId));
        String fileNamePDF = foundBook.getPdfPath();  // Lấy tên file từ đối tượng Book
        if(pdfFile !=null){
            deletePdf(fileNamePDF);
            savePdf(pdfFile);
            foundBook.setPdfPath(nameWithoutExtension(pdfFile));
            bookRepository.save(foundBook);
        }
        
    }
    
    @PostMapping("book/update/upload/cover")
    public void updateCover(
            @RequestParam("coverPath") MultipartFile coverFile,
            @RequestParam("bookId") String bookId
    ) {
        Book foundBook = bookRepository.getByBookId(Integer.parseInt(bookId));
        String fileNameCOVER = foundBook.getCoverPath(); // Lấy tên file từ đối tượng Book
        if(coverFile!=null){
            deleteCover(fileNameCOVER);
            saveCover(coverFile);
            foundBook.setCoverPath(nameWithoutExtension(coverFile));
            bookRepository.save(foundBook);
        }
        
    }

    public void deletePdf(String fileNamePDF) {
        String pdfFilePath = DELETE_DIR_PDF + fileNamePDF + ".pdf";
        File file = new File(pdfFilePath);
        if (file.delete()) {
            System.out.println("File " + fileNamePDF + " đã được xóa thành công.");
        } else {
            System.out.println("Xóa file " + fileNamePDF + " thất bại.");
        }
    }

    public void deleteCover(String fileNameCOVER) {
        String coverFilePath = DELETE_DIR_COVER + fileNameCOVER + ".jpg";
        File filecover = new File(coverFilePath);
        if (filecover.delete()) {
            System.out.println("File " + fileNameCOVER + " đã được xóa thành công.");
        } else {
            System.out.println("Xóa file " + fileNameCOVER + " thất bại.");
        }
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable("id") int id) {
        Optional<Book> book = bookRepository.findById(id);
        String fileNameCOVER = book.get().getCoverPath(); // Lấy tên file từ đối tượng Book
        String fileNamePDF = book.get().getPdfPath(); // Lấy tên file từ đối tượng Book
        // xoa file pdf
        deletePdf(fileNamePDF);
        // Nếu file là jpg
        String coverFilePath = DELETE_DIR_COVER + fileNameCOVER + ".jpg";
        deleteCover(fileNameCOVER);
        categoryRepository.deleteCategory(book.get().getBookId());
        bookRepository.delete(book.get());
    }

    public void savePdf(MultipartFile file) {

        if (file != null) {
            try {
                String filename = file.getOriginalFilename();
                byte[] bytes = file.getBytes();
                Path path = Paths.get(UPLOAD_DIR_PDF + filename);
                Files.write(path, bytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void saveCover(MultipartFile file) {

        if (file != null) {
            try {
                String filename = file.getOriginalFilename();
                byte[] bytes = file.getBytes();
                Path path = Paths.get(UPLOAD_DIR_COVER + filename);
                Files.write(path, bytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public String nameWithoutExtension(MultipartFile file) {
        String filename = file.getOriginalFilename();
        String nameWithoutExtension = filename.substring(0, filename.lastIndexOf("."));
        return nameWithoutExtension;
    }

    @PostMapping("add")
    public ResponseEntity<?> addBook(
            @RequestParam("title") String title,
            @RequestParam("author") String author,
            @RequestParam("description") String description,
            @RequestParam("price") float price,
            @RequestParam("pdfFile") MultipartFile pdfFile,
            @RequestParam("coverFile") MultipartFile coverFile,
            @RequestParam("username") String username,
            @RequestParam("category") int categoryId) {
        // Lưu thông tin user vào database
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }
//        // Lưu thông tin pdf file
        savePdf(pdfFile);
//
//        // Lưu thông tin cover file
        saveCover(coverFile);
//
        // Lưu thông tin book
        Book book = new Book();
        book.setTitle(title);
        book.setAuthorName(author);
        book.setDescription(description);
        book.setPrice(price);
        book.setCreatedBy(user);
        book.setIsApproved(0);
        book.setNoSale(0);
        book.setNoView(0);
        bookRepository.save(book);
        BookId = book.getBookId();
        book.setPdfPath(nameWithoutExtension(pdfFile));
        book.setCoverPath(nameWithoutExtension(coverFile));
        bookRepository.save(book);
        categoryRepository.saveBook_Category(BookId, categoryId);

        return ResponseEntity.ok().build();
    }

}
