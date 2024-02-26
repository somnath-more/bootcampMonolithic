SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bc_25_gc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bc_25_gc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bc_25_gc` DEFAULT CHARACTER SET utf8 ;
USE `bc_25_gc` ;

-- -----------------------------------------------------
-- Table `bc_25_gc`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`city` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `aqi_value` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`company` (
  `id` INT NOT NULL,
  `logo` VARCHAR(225) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`id`, `city_id`),
  INDEX `fk_company_city1_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES `bc_25_gc`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`job` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`company_job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`company_job` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_description` varchar(500) NOT NULL,
  `date_posted` varchar(45) NOT NULL,
  `job_type` varchar(45) NOT NULL,
  `experience_level` varchar(45) NOT NULL,
  `company_id` int NOT NULL,
  `job_id` int NOT NULL,
  `days` int NOT NULL,
  PRIMARY KEY (`id`, `company_id`, `job_id`),
  INDEX `fk_company_has_role_role1_idx` (`job_id` ASC) VISIBLE,
  INDEX `fk_company_has_role_company_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_has_role_company`
    FOREIGN KEY (`company_id`)
    REFERENCES `bc_25_gc`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_role_role1`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_25_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`skill` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`skills_required`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`skills_required` (
  `job_id` INT NOT NULL,
  `skill_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `skill_id`),
  INDEX `fk_role_has_skill_skill1_idx` (`skill_id` ASC) VISIBLE,
  INDEX `fk_role_has_skill_role1_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `fk_role_has_skill_role1`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_25_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_has_skill_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `bc_25_gc`.`skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`user` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`commute`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`commute` (
  `id` INT NOT NULL,
  `route_option` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`company_commute`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`company_commute` (
  `commute_id` INT NOT NULL,
  `company_id` INT NOT NULL,
  `is_green_commute` VARCHAR(45) NOT NULL,
  `distance` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`commute_id`, `company_id`),
  INDEX `fk_route_options_has_company_roles_route_options1_idx` (`commute_id` ASC) VISIBLE,
  INDEX `fk_role_routes_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_route_options_has_company_roles_route_options1`
    FOREIGN KEY (`commute_id`)
    REFERENCES `bc_25_gc`.`commute` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_routes_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `bc_25_gc`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`user_skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`user_skills` (
  `user_id` INT NOT NULL,
  `skill_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `skill_id`),
  INDEX `fk_user_has_skill_skill1_idx` (`skill_id` ASC) VISIBLE,
  INDEX `fk_user_has_skill_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_skill_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_25_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_skill_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `bc_25_gc`.`skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`user_city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`user_city` (
  `user_id` INT NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `city_id`),
  INDEX `fk_user_has_city_city1_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_city_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_25_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_city_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES `bc_25_gc`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`saved_jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`saved_jobs` (
  `user_id` INT NOT NULL,
  `company_job_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `company_job_id`),
  INDEX `fk_user_has_company_job_company_job1_idx` (`company_job_id` ASC) VISIBLE,
  INDEX `fk_user_has_company_job_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_company_job_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_25_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_company_job_company_job1`
    FOREIGN KEY (`company_job_id`)
    REFERENCES `bc_25_gc`.`company_job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_25_gc`.`applied_jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_25_gc`.`applied_jobs` (
  `user_id` INT NOT NULL,
  `company_job_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `company_job_id`),
  INDEX `fk_company_job_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_company_job_has_user_company_job1_idx` (`company_job_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_job_has_user_company_job1`
    FOREIGN KEY (`company_job_id`)
    REFERENCES `bc_25_gc`.`company_job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_job_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_25_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
