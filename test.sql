create database if not exists icfdb;

use icfdb;

drop table if exists user;
drop table if exists project;
drop table if exists project_user;
drop table if exists project_detail;
drop table if exists quiz;
drop table if exists finished;

create table if not exists user (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(512) NOT NULL,
    last_name varchar(512) NOT NULL,
    password varchar(512) NOT NULL,
    unique_id varchar(512) NOT NULL,
    is_admin bool NOT NULL default false
);

create table if not exists project ( 
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    site_id varchar(512) NOT NULL,
    name varchar(512) NOT NULL
);

create table if not exists project_user ( 
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    uid int NOT NULL REFERENCES user(id),
    pid int NOT NULL REFERENCES project(id),
    is_completed bool NOT NULL default false,
    is_signed bool NOT NULL default false, 
    edu_start_time double NOT NULL default 0,
    icf_start_time double NOT NULL default 0,
    teachback_start_time double NOT NULL default 0,
    finish_time double NOT NULL default 0
);

create table if not exists project_detail ( 
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pid int NOT NULL REFERENCES project(id),
    title varchar(512) NOT NULL,
    content varchar(15000) NOT NULL
);

create table if not exists quiz (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pid int NOT NULL REFERENCES project(id),
    description varchar(4096) NOT NULL,
    option1 varchar(1024) NOT NULL,
    option2 varchar(1024) NOT NULL,
    option3 varchar(1024),
    option4 varchar(1024),
    ans_idx int NOT NULL,
    ans_exp varchar(4096) NOT NULL
);

create table if not exists finished ( 
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pid int NOT NULL REFERENCES project(id),
    uid int NOT NULL REFERENCES user(id),
    is_finished bool NOT NULL default false
);


insert into user values (0, 'Guanwen', 'Wang', 'asdfgh', 'qazwsx', true);
insert into user values (0, 'Susan', 'Chen', 'zxcvbn', 'tgbyhn', default);
insert into user values (0, 'user', 'user', 'qwerty', 'edcrfv', default);

-- insert into project values (0, 1, 'POIUYT', 'test1');
-- insert into project values (0, 2, 'LKJHGF', 'test2');
-- insert into project values (0, 3, 'MNBVCX', 'Study Drug CX-012 for Refractory non-Hodgkin’s Lymphoma');

insert into project values (0, 'POIUYT', 'test1');
insert into project values (0, 'LKJHGF', 'test2');
insert into project values (0, 'MNBVCX', 'Study Drug for Diabetes');

insert into project_user values (0, 1, 1, default, default, default, default, default, default);
insert into project_user values (0, 1, 3, default, default, default, default, default, default);
insert into project_user values (0, 3, 2, default, default, default, default, default, default);
insert into project_user values (0, 3, 3, default, default, default, default, default, default);

insert into project_detail values (0, 3, 'What is the purpose for this research study?', 
'Here is a sample explanations.');
insert into project_detail values (0, 3, 'Here is a sample explanations.');
insert into project_detail values (0, 3, 'What tests and procedures will I have done?',
'Here is a sample explanations.');
insert into project_detail values (0, 3, 'Who can I ask questions about the research study?', 
'Here is a sample explanations.');
insert into quiz values (0, 3, "What is the purpose of the study?", "To determine if the study drug is safe and can reduce or prevent the growth of cancer cells.", "To determine if the study drug is safe and can reduce blood sugar.", "To determine if the study drug can cure cancer", "", 0, "This is a research study for non-Hodgkin’s lymphoma. The purpose is to determine if the study drug will reduce or prevent the cancer cells from growing and if the study drug is safe.");
insert into quiz values (0, 3, "What are some of the study procedures?", "Visit the study site every week and have blood drawn", "Evaluate my daily activities and visit the site every 4 weeks", "Visit the site annually and have a physical exam", "", 1, "You will have to return to the study site every 4 weeks. At that time, your health will be checked and your ability to perform daily activities.");
insert into quiz values (0, 3, "What are some of the risks?", "Increased infection, joint pain, risk to the fetus if pregnancy occurs", "Better blood sugar control for diabetics", "Some medications I am taking may not work", "", 0, "The study drug may have adverse reactions (risks) such as pain in the joints, an increased chance of getting an infection.");
insert into quiz values (0, 3, "What are the benefits for enrolling in the study?", "I will get a payment for being in the study", "My insurance company will not bill me", "My condition may get better", "", 2, "Reimbursement for your time and compensation is intended to be just and fair but are not considered benefits. The benefit to the study is that your condition may get better if the study drug works for you.");
insert into quiz values (0, 3, "Can I withdraw from the study?", "No, I must wait until my doctor approves before I can withdraw", "Yes, I can withdraw at any time", "Not sure", "", 1, "You are able to withdraw from the study at any time without any penalty to you.");
insert into quiz values (0, 3, "What are my options if I don't enroll?", "I don't have any other options", "I can receive the same treatment I would receive if I didn't enroll in the study", "Not sure", "", 1, "You do not need to be in the study to receive treatment for your condition. If you don't enroll, you can receive the same treatment you would have received.");
insert into quiz values (0, 3, "How long will I be in the study?", "Up to 8 weeks", "Up to 52 weeks", "Not sure", "", 1, "The study will last for one year or 52 weeks.");
insert into quiz values (0, 3, "How will the study drug be given?", "By an infusion", "Taken by mouth", "Not sure", "", 1, "The study drug is a tablet that is taken by mouth with water.");	
insert into quiz values (0, 3, "The main goal for the reason I was asked to participate in the study is ", "My experience will be summarized to determine if the drug works and is safe in general", "My doctor will be giving me the best treatment for me personally", "Not sure", "", 0, "Research is for the purpose of finding answers that can be used to benefit society as a whole. The main goal of the study is to summarize your information with others in this study to determine if the drug works and is safe in general.");
insert into finished values (0, 2, 2, default);

-- select * from user;
-- select * from project; 
-- select * from quiz;

select * from user, project, project_user where user.id = project_user.uid and project.id = project_user.pid and project.site_id = 'MNBVCX';

-- drop table project;

-- drop database icfdb;