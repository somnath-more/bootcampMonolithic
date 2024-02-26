package com.zemoso.greencommute.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.logging.Level;
import java.util.logging.Logger;

@ControllerAdvice
public class GlobalExceptionHandler {

    Logger logger=Logger.getLogger(GlobalExceptionHandler.class.getName());
    @ExceptionHandler
    public void exceptionHandlerMethod(RuntimeException exception){
        logger.log(Level.INFO,exception.getMessage());
    }

    @ExceptionHandler
    public void exceptionHandlerMethod(Exception exception) {
        logger.log(Level.INFO,exception.getMessage());
    }
}
