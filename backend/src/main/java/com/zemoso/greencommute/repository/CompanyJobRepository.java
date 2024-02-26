package com.zemoso.greencommute.repository;

import com.zemoso.greencommute.entity.CompanyJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyJobRepository extends JpaRepository<CompanyJob, Integer> {

}
