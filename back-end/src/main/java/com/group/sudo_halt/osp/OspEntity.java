package com.group.sudo_halt.osp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="osps")
public class OspEntity {

    @Id
    private String id;

    private String ospName;
    private String owner;
    private String ownerEmail;
    private String projectLink;
    private String rating;
    private String vacancy;
    private String license;
    private String ospTags;

    public OspEntity(String ospName, String owner, String ownerEmail, String projectLink,
                     String rating, String vacancy, String license, String ospTags){
        this.setOspName(ospName);
        this.setOwner(owner);
        this.setOwnerEmail(ownerEmail);
        this.setProjectLink(projectLink);
        this.setRating(rating);
        this.setVacancy(vacancy);
        this.setLicense(license);
        this.setOspTags(ospTags);
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOspName() {
        return ospName;
    }

    public void setOspName(String ospName) {
        this.ospName = ospName;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public String getProjectLink() {
        return projectLink;
    }

    public void setProjectLink(String projectLink) {
        this.projectLink = projectLink;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getVacancy() {
        return vacancy;
    }

    public void setVacancy(String vacancy) {
        this.vacancy = vacancy;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getOspTags() {
        return ospTags;
    }

    public void setOspTags(String ospTags) {
        this.ospTags = ospTags;
    }
}
