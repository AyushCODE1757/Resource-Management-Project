package com.aayush.ResourceManagmentBackend.controllers;

import com.aayush.ResourceManagmentBackend.models.Resources;
import com.aayush.ResourceManagmentBackend.services.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ResourceController {
    @Autowired
    private ResourceService service;

    @GetMapping("/api/resources")
    public ResponseEntity<List<Resources>> getAllResources(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String search) {
        List<Resources> result = service.findAllResources(type, status, search);
        if (result != null) {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/resources/{id}")
    public ResponseEntity<Resources> getResourceById(@PathVariable String id) {
        Optional<Resources> result = service.findResourceById(id);
        if (result.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result.get(), HttpStatus.OK);
    }

    @PostMapping("/api/resources")
    public ResponseEntity<Resources> insertResource(@RequestBody Resources resource) {
        try {
            Resources savedResource = service.addResource(resource);
            return new ResponseEntity<>(savedResource, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/api/resources/{id}")
    public ResponseEntity<String> updateResource(@PathVariable String id, @RequestBody Resources resource) {
        try {
            service.updateResource(id, resource);
            return new ResponseEntity<>("Updated", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/api/resources/{id}")
    public ResponseEntity<String> deleteResources(@PathVariable String id) {
        Optional<Resources> resource = service.findResourceById(id);
        if (resource.isPresent()) {
            service.deleteResources(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
