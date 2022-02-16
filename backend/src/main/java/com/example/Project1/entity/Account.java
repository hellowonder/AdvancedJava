package com.example.Project1.entity;



import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "account_tb")
public class Account {

	
	private String name;
	@Id
	private long phone;
	private String email;
	private String password;
	
	@OneToMany(mappedBy = "customer")
	private List<Table1> tables;
	
	public String getName() {
		return name;
	}
	public List<Table1> getTables() {
		return tables;
	}
	public void setTables(List<Table1> tables) {
		this.tables = tables;
	}
	public long getPhone() {
		return phone;
	}
	public String getEmail() {
		return email;
	}
	public String getPassword() {
		return password;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	




		
}