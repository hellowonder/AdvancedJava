package com.example.Project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project1.dto.LoginDetails;
import com.example.Project1.entity.Account;
import com.example.Project1.entity.Table1;
import com.example.Project1.services.AccountService;
import com.example.Project1.services.TableService;

@RestController
@CrossOrigin
public class MyController {

	@Autowired
	private TableService tableservice;
	
	@Autowired
	private AccountService accService;
	
	

	@PostMapping(path="/register")
	public void OpenAccount(@RequestBody Account acc)
	{
		this.accService.openAccount(acc);
	}
	
	@PostMapping("/login")
	public Account login(@RequestBody LoginDetails loginDetails){
	 Account user=accService.login(loginDetails);
	 return user;
	}
	
	

	
	@GetMapping("/tables")
	public List<Table1> getTables()
	{
		return this.tableservice.getTables();
	}
	
	@PostMapping("/addtables")
	public Table1 addTable(@RequestBody Table1 table)
	{
	return this.tableservice.addTable(table);	
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable String id)
	{
		this.tableservice.datadelt(Long.parseLong(id));
		return "deleted";
		}
	}

