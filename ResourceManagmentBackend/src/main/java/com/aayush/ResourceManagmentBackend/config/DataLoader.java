package com.aayush.ResourceManagmentBackend.config;

import com.aayush.ResourceManagmentBackend.models.Resources;
import com.aayush.ResourceManagmentBackend.models.enums.AllocationType;
import com.aayush.ResourceManagmentBackend.models.enums.ResourceStatus;
import com.aayush.ResourceManagmentBackend.models.enums.ResourceType;
import com.aayush.ResourceManagmentBackend.repos.ResourceRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(ResourceRepo repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(List.of(
                        new Resources("1", "Main Projector", ResourceType.PROJECTOR, AllocationType.CLASSROOM,
                                ResourceStatus.WORKING, "Room 101", LocalDate.now().minusMonths(1),
                                LocalDate.now().minusYears(1)),
                        new Resources("2", "Office Printer", ResourceType.PRINTER, AllocationType.FACULTY,
                                ResourceStatus.WORKING, "Dr. Smith", LocalDate.now().minusMonths(2),
                                LocalDate.now().minusYears(2)),
                        new Resources("3", "Corridor CCTV", ResourceType.CCTV, AllocationType.CLASSROOM,
                                ResourceStatus.NON_WORKING, "Block A", LocalDate.now().minusMonths(6),
                                LocalDate.now().minusYears(3))));
            }
        };
    }
}
