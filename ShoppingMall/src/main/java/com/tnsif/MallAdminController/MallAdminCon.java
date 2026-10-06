package com.tnsif.MallAdminController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tnsif.MallAdminEntity.MallAdmin;
import com.tnsif.MallAdminService.MallAdminSer;

@RestController
public class MallAdminCon {
	
	@Autowired
	private MallAdminSer mas;
	
	@PostMapping("/malladmin")
	public MallAdmin addmalladmin(@RequestBody MallAdmin m) {
		return mas.addmalladmin(m);
	}
	
	@GetMapping("/addmalladmin")
	public List<MallAdmin> getmalladmin(){
		return mas.getmalladmin();
	}
	
	@PutMapping("/updatemalladmin/{id}")
	public MallAdmin updatemalladmin(@PathVariable Integer id, @RequestBody MallAdmin m) {
		m.setId(id);
		return mas.updatemalladmin(m);
	}
	
	@DeleteMapping("/deletemalladmin/{id}")
	public void deletemalladmin(@PathVariable Integer id) {
		mas.deletemalladmin(id);
	}

}
