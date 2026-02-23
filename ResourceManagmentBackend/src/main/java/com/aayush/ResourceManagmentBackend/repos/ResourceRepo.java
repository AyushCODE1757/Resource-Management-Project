package com.aayush.ResourceManagmentBackend.repos;

import com.aayush.ResourceManagmentBackend.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepo extends JpaRepository<Resources, String> {
}
