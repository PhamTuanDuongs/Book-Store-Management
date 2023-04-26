/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.store.book.controller;

/**
 *
 * @author nhat
 */
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;

/**
 *
 * @author nhat
 */
@Service
public class StorageServiceImpl implements StorageService {

    private final Path pdfPath = Paths.get("/home/nhat/GitHub/project/Book-Store-Management/react-app/book-store/public/images/pdf");
    private final Path imgPath = Paths.get("/home/nhat/GitHub/project/Book-Store-Management/react-app/book-store/public/images/cover");

    /**
     * Saves a PDF file to the file system.
     *
     * @param file the MultipartFile object representing the file to be saved
     * @param filename the name of the file to be saved
     * @throws IOException if an I/O error occurs during the file copying process
     */
    @Override
    public void savePdf(MultipartFile file, String filename) {
        String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
        Path targetPath = pdfPath.resolve(filename);
        try {
            Files.createDirectories(targetPath.getParent());
            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new StorageException("Failed to store file " + filename, e);
        }
    }

    /**
     * Saves an image file to the file system.
     *
     * @param file the MultipartFile object representing the file to be saved
     * @param filename the name of the file to be saved
     * @throws IOException if an I/O error occurs during the file copying process
     */
    @Override
    public void saveImg(MultipartFile file, String filename) {
        String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
        Path targetPath = imgPath.resolve(filename);
        try {
            Files.createDirectories(targetPath.getParent());
            Files.copy(file.getInputStream(), targetPath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store image file " + filename, e);
        }
    }

    @Override
    public void init() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void store(MultipartFile file) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Stream<Path> loadAll() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Path load(String filename) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Resource loadAsResource(String filename) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteAll() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}