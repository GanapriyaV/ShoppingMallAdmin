package com.tnsif.MallAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.MallAdminEntity.MallAdmin;
import com.tnsif.MallAdminRepository.MallAdminRepo;

@Service
public class MallAdminSer {
	
	@Autowired
	private MallAdminRepo mar;
	
	public MallAdmin addmalladmin(MallAdmin m) {
		return mar.save(m);
	}
	
	public List<MallAdmin> getmalladmin(){
		return (List<MallAdmin>) mar.findAll();
	}
	
	public MallAdmin updatemalladmin(MallAdmin m) {
		return mar.save(m);
	}
	
	public void deletemalladmin(Integer id) {
		mar.deleteById(id);
	}

}
