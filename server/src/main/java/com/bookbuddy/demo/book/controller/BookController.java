package com.bookbuddy.demo.book.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.global.crawling.CrawlingService;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;
import java.text.ParseException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final CrawlingService crawlingService;
    private final BookMapper mapper;
    private final BookService bookService;
    
    /* 도서 리스트 */
    @GetMapping("/list")
    public ResponseEntity getBooks(@RequestParam("page") @Positive @Max(10) int page,
                                    @RequestParam("size") @Positive int size) throws ParseException, InterruptedException {
        List<Book> dataList = crawlingService.process(page, size);
        return new ResponseEntity(mapper.BooksToBookResponseDtos(dataList), HttpStatus.CREATED);
    }

    /* 도서 상세 */
    @GetMapping("/{book-id}")
    public ResponseEntity getBook(@PathVariable("book-id") @Positive String bookId) {
        Book findBook = bookService.findVerifyBook(bookId);
        return new ResponseEntity(mapper.BookToBookResponseDto(findBook), HttpStatus.CREATED);
    }
    /* 도서 삭제 */
    @DeleteMapping("/{book-id}")
    public ResponseEntity deleteBook(@PathVariable("book-id") @Positive String bookId) {
        bookService.deleteBook(bookId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
