package com.example.Project1.Dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

import com.example.Project1.entity.Account;
import com.example.Project1.entity.Table1;

@Component
public class GenericDao {
	@PersistenceContext
	private EntityManager entityManager;
	
	
	public void add(Object obj)
	{
		entityManager.merge(obj);
	}
	
	public void deleteData(Class cls,Object pk) {
		Object obj=entityManager.find(cls, pk);
		entityManager.remove(obj);
	}
	
	public <E> E findByPk(Class<E> cls,Object pk)
	{
		return entityManager.find(cls, pk);
	}
	
	public List<Table1> fetchTables()
	{
		return entityManager
				.createQuery("select t from Table1 t ")
				.getResultList();
		
	}

	public Account findByEmailAndPassword(String email, String password) {
		return (Account)
				entityManager
				.createQuery("select c from Account c where c.email = :em and c.password = :pw")
				.setParameter("em", email)
				.setParameter("pw", password)
				.getSingleResult() ;
	}

}
