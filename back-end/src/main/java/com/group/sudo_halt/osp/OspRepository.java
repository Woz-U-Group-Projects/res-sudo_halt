package com.group.sudo_halt.osp;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OspRepository extends MongoRepository<OspEnity, String> {
    public OspEnity findByOspName(String ospName);
}
