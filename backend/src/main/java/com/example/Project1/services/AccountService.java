package com.example.Project1.services;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Project1.Dao.GenericDao;
import com.example.Project1.dto.LoginDetails;
import com.example.Project1.entity.Account;


@Service
public class AccountService  {

	@Autowired
	private GenericDao genericDao;

	
	
	@Transactional
	public void openAccount(Account acc)
	{
	
			genericDao.add(acc);
	
	}

	public Account login(LoginDetails loginDetails) {
		Account user=genericDao.findByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
		return user;
}
	

	
}
