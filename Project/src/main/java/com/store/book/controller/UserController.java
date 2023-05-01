/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

import com.store.book.model.Book;
import com.store.book.model.Feature;
import com.store.book.model.Role;
import com.store.book.model.User;
import com.store.book.repository.BookRepository;
import com.store.book.repository.CategoryRepository;
import com.store.book.repository.FeatureRepository;
import com.store.book.repository.RoleRepository;
import com.store.book.repository.UserRepository;
import com.store.book.utils.DateTimeUtils;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Date;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author nhat
 */
@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;
    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/avatar/";
    private static final String DELETE_DIR = System.getProperty("user.dir") + "/avatar/";
    private static final String DELETE_DIR_COVER = System.getProperty("user.dir") + "/cover/";
    private static final String DELETE_DIR_PDF = System.getProperty("user.dir") + "/pdf/";

    @GetMapping
    public List<User> getAllFeature() {
        return userRepository.findAll();
    }

    @GetMapping("/login/{user}")
    User getUser(@PathVariable String user) {
        if (userRepository.findByUsername(user) != null) {
            return userRepository.findByUsername(user);
        } else {
            return null;
        }
    }

    @PostMapping("/login")
    User loginUser(@RequestBody User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return foundUser;
        } else {
            return null;
        }
    }

    @PostMapping("/avatar/update")
    public void updateAvatar(@RequestParam("avatarPath") MultipartFile fileUpdate, @RequestParam("username") String username) {
        User foundUser = userRepository.findByUsername(username);
        String fileNameJPG = foundUser.getAvatarPath();
        String jpgFilePath = DELETE_DIR+ fileNameJPG +".jpg";
        File file = new File(jpgFilePath);
        if (file.delete()) {
            System.out.println("File " + jpgFilePath + " đã được xóa thành công.");
        } else {
            System.out.println("Xóa file " + jpgFilePath+ " thất bại.");
        }
        
        String nameWithoutExtension = nameWithoutExtension(fileUpdate);
        foundUser.setAvatarPath(nameWithoutExtension);
        userRepository.save(foundUser);
        if (fileUpdate != null) {
                try {
                    String filename = fileUpdate.getOriginalFilename();
                    byte[] bytes = fileUpdate.getBytes();
                    Path path = Paths.get(UPLOAD_DIR + filename);
                    Files.write(path, bytes);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
         
    }
   
    
    
    @PostMapping(value = "/update")
    public ResponseEntity<String> updateUserInformation(@RequestBody User user) {
        User temp = userRepository.findByUsername(user.getUsername());
        if (temp == null) {
            return ResponseEntity.notFound().build();
        }
        temp.setPassword(user.getPassword());
        temp.setDisplayName(user.getDisplayName());
        temp.setDob(user.getDob());
        temp.setEmail(user.getEmail());
        userRepository.save(temp);
        return ResponseEntity.ok("User information updated successfully");
    }
    
        public String nameWithoutExtension(MultipartFile file) {
        String filename = file.getOriginalFilename();
        String nameWithoutExtension = filename.substring(0, filename.lastIndexOf("."));
        return nameWithoutExtension;
    }

    @GetMapping(value = "/avatar/{fileId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getUserAvatar(@PathVariable String fileId) throws IOException {
        String filePath = "avatar/" + fileId + ".jpg";
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
    
    @Transactional
    @PostMapping(value = "/updateRole")
    public ResponseEntity<String> updateRole(@RequestBody User user) {
        User temp = userRepository.findByUsername(user.getUsername());
        if (temp == null) {
            return ResponseEntity.notFound().build();
        }
        userRepository.saveUser_Role(temp.getUsername(), 2);
        return ResponseEntity.ok("Update role to admin");
    }

    public void deleteBookByUser(int id) {
        Optional<Book> book = bookRepository.findById(id);
        String fileNameCOVER = book.get().getCoverPath(); // Lấy tên file từ đối tượng Book
        String fileNamePDF = book.get().getPdfPath(); // Lấy tên file từ đối tượng Book
        // xoa file pdf
        String pdfFilePath = DELETE_DIR_PDF + fileNamePDF+".pdf";
        File file = new File(pdfFilePath);
        if (file.delete()) {
            System.out.println("File " + fileNamePDF + " đã được xóa thành công.");
        } else {
            System.out.println("Xóa file " + fileNamePDF + " thất bại.");
        }
        // Nếu file là jpg
        String coverFilePath = DELETE_DIR_COVER + fileNameCOVER+".jpg";
        File filecover = new File(coverFilePath);
        if (filecover.delete()) {
            System.out.println("File " + fileNameCOVER + " đã được xóa thành công.");
        } else {
            System.out.println("Xóa file " + fileNameCOVER + " thất bại.");
        }
        categoryRepository.deleteCategory(book.get().getBookId());
        bookRepository.delete(book.get());
    }
    
    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") String id) {
        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        User user = userOptional.get();

        List<Book> books = bookRepository.findByUsername(user.getUsername());
        for (Book book : books) {
            deleteBookByUser(book.getBookId());
        }
        userRepository.deleteWithRoles(user.getUsername());
        return ResponseEntity.ok("oke");
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<String> registerUser(@RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("displayName") String displayName,
            @RequestParam("dob") String dob,
            @RequestParam("avatar") MultipartFile file) {
        Optional<User> userOptional = userRepository.findById(username);

        if (!userOptional.isPresent()) {

            // Lưu ảnh vào folder UPLOAD_DIR
            if (file != null) {
                try {
                    String filename = file.getOriginalFilename();
                    byte[] bytes = file.getBytes();
                    Path path = Paths.get(UPLOAD_DIR + filename);
                    Files.write(path, bytes);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            // Lưu thông tin user vào database
            User user = new User();
            String filename = file.getOriginalFilename();
            String nameWithoutExtension = filename.substring(0, filename.lastIndexOf("."));
            user.setUsername(username);
            user.setAvatarPath(nameWithoutExtension);
            user.setPassword(password);
            user.setDisplayName(displayName);
            user.setDob(Date.valueOf(dob));
            user.setEmail(email);
            user.setCreateDate(DateTimeUtils.getSqlDateNow());
            user.setLastActive(DateTimeUtils.getSqlTimeStampNow());
            userRepository.save(user);
            userRepository.saveUser_Role(user.getUsername(), 3);
            return ResponseEntity.ok("User registered successfully");

        }else{
                return ResponseEntity.ok("User registered fail user is existed");
        }
        
    }

}
