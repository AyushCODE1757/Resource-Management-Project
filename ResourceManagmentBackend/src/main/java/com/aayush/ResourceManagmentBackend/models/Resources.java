package com.aayush.ResourceManagmentBackend.models;

import com.aayush.ResourceManagmentBackend.models.enums.AllocationType;
import com.aayush.ResourceManagmentBackend.models.enums.ResourceStatus;
import com.aayush.ResourceManagmentBackend.models.enums.ResourceType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Resources {

    @Id
    private String id;

    private String name;

    @Enumerated(EnumType.STRING)
    private ResourceType type;

    @Enumerated(EnumType.STRING)
    private AllocationType allocationType;

    @Enumerated(EnumType.STRING)
    private ResourceStatus status;

    private String allocatedTo;

    private LocalDate lastMaintenance;

    private LocalDate purchaseDate;
}