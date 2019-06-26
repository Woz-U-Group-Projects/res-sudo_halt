package com.group.sudo_halt.osp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/osp")
public class OspController {
    @Autowired
    OspRepository ospRepository;

    @GetMapping("/{ospName}")
    public ResponseEntity<OspEnity> getUserInfo(@PathVariable(value = "ospName") String ospName) {
        OspEnity foundOsp = ospRepository.findByOspName(ospName);

        if (foundOsp == null) {
            return ResponseEntity.notFound().header("Message", "No OSP is found").build();
        }

        return ResponseEntity.ok(foundOsp);
    }
}
