INSERT INTO `bc_25_gc`.`user` VALUES (1,'Sara Joseph','sarajoseph@gmail.com',123456789);

INSERT INTO `bc_25_gc`.`job` VALUES (1,'User Experience Designer'),(2,'Product Designer'),(3,'User Interface Designer'),(4,'Lead Product Designer'),(5,'UI/UX Designer'),(6,'Visual Designer');

INSERT INTO `bc_25_gc`.`commute` VALUES (1,'train'),(2,'car'),(3,'bus'),(4,'bike');

INSERT INTO `bc_25_gc`.`skill` VALUES (1,'C'),(2,'Java'),(3,'C++'),(4,'React'),(5,'JavaScript'),(6,'Python');

INSERT INTO `bc_25_gc`.`city` VALUES (1,'Hyderabad','100'),(2,'Delhi','190'),(3,'Bangalore','150');

INSERT INTO `bc_25_gc`.`company` VALUES (1,"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/66c88eb1-0d63-47e4-ae57-8ff9c4f26715-3x.png",'Hp','Hitech City, Telangana, India',1),(2,"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/cf608e0d-6d07-4b60-bd5e-4dfb1a77b343-2x.png",'BMW','Hitech City, Telangana, India',1),(3,"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/458c1d99-03f9-430f-b9b0-69f2bd906183-2x.png",'Microchip','Hitech City, Telangana, India',1);

INSERT INTO `bc_25_gc`.`company_commute` VALUES (1,1,"Yes","21 - 30 kms"),(2,1,"Yes","21 - 30 kms"),(3,1,"Yes","21 - 30 kms"),(4,1,"Yes","21 - 30 kms"),(3,2,"Yes","0 - 10 kms"),(4,2,"Yes","0 - 10 kms"),(2,3,"No","31 - 40 kms"),(3,3,"Yes","31 - 40 kms"),(4,3,"No","31 - 40 kms");

INSERT INTO `bc_25_gc`.`company_job` VALUES (1,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Past week','Internship','Fresher',1,1,2),
(2,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Past 24hrs','Full-time','Fresher',2,2,2),
(3,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Past month','Contract','Director',3,3,2),
(4,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Anytime','Remote','Executive',2,4,2),
(5,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Past week','Internship','Mid-level',3,5,2),
(6,'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','Past week','Internship','Mid-level',1,6,2);

INSERT INTO `bc_25_gc`.`skills_required` VALUES (1,1),(2,1),(3,1),(3,2),(4,2),(5,2),(6,3),(1,4),(5,5),(4,6);

INSERT INTO `bc_25_gc`.`user_city` VALUES (1,1),(1,2);

INSERT INTO `bc_25_gc`.`user_skills` VALUES (1,1),(1,2),(1,4);
