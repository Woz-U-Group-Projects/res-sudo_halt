package com.group.sudo_halt.osp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/osp")
public class OspController {
    @Autowired
    OspRepository ospRepository;

    @GetMapping
    public List<OspEntity> getJSONOsp(){
        List<OspEntity> foundOsp = ospRepository.findAll();
        return foundOsp;
    }

    @GetMapping("/{ospName}")
    public ResponseEntity<OspEntity> getUserInfo(@PathVariable(value = "ospName") String ospName) {
        OspEntity foundOsp = ospRepository.findByOspName(ospName);

        if (foundOsp == null) {
            return ResponseEntity.notFound().header("Message", "No OSP is found").build();
        }

        return ResponseEntity.ok(foundOsp);
    }
}
