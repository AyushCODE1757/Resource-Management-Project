package com.aayush.ResourceManagmentBackend.services;

import com.aayush.ResourceManagmentBackend.models.Resources;
import com.aayush.ResourceManagmentBackend.repos.ResourceRepo;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {
    @Autowired
    private ResourceRepo repo;

    public List<Resources> findAllResources(String type, String status, String search) {
        return repo.findAll().stream()
                .filter(r -> type == null || r.getType().name().equalsIgnoreCase(type))
                .filter(r -> status == null || r.getStatus().name().equalsIgnoreCase(status))
                .filter(r -> search == null || r.getName().toLowerCase().contains(search.toLowerCase())
                        || (r.getAllocatedTo() != null
                                && r.getAllocatedTo().toLowerCase().contains(search.toLowerCase())))
                .toList();
    }

    public Optional<Resources> findResourceById(String id) {
        return repo.findById(id);
    }

    public Resources addResource(Resources resource) throws IOException {
        return repo.save(resource);
    }

    public Resources updateResource(String id, Resources resource) throws IOException {
        if (!repo.existsById(id)) {
            throw new IOException("Resource not found");
        }
        resource.setId(id);
        return repo.save(resource);
    }

    public void deleteResources(String id) {
        repo.deleteById(id);
    }
}
