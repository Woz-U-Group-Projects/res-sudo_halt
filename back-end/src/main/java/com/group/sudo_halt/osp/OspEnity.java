package com.group.sudo_halt.osp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="osps")
public class OspEnity {

    @Id
    public String id;

    public String ospName;
    public String owner;
    public String ownerEmail;
    public String projectLink;
    public String rating;
    public String vacancy;
    public String license;
    public String ospTags;

    public OspEnity(String ospName, String owner, String ownerEmail, String projectLink,
                    String rating, String vacancy, String license, String ospTags){
        this.ospName = ospName;
        this.owner = owner;
        this.ownerEmail = ownerEmail;
        this.projectLink = projectLink;
        this.rating = rating;
        this.vacancy = vacancy;
        this.license = license;
        this.ospTags = ospTags;
    }
}
