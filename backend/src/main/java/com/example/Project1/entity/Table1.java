package com.example.Project1.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@javax.persistence.Table (name="Tbl_Book")
public class Table1 {
	@Id
	@GeneratedValue
	private long id;
	private int seats;
	private LocalDate date;
	private LocalTime time;
	private String phone;
	
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Account customer;
	
	public Account getCustomer() {
		return customer;
	}
	public void setCustomer(Account customer) {
		this.customer = customer;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int no_of_member) {
		seats = no_of_member;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String mob_no) {
		phone = mob_no;
	}
	
	
}
