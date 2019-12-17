package com.icf.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProjectUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int uid;
    private int pid;
    private boolean is_completed;
    private boolean is_signed;
    private double edu_start_time;
    private double icf_start_time;
    private double teachback_start_time;
    private double finish_time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public boolean isIs_completed() {
        return is_completed;
    }

    public void setIs_completed(boolean is_completed) {
        this.is_completed = is_completed;
    }

    public boolean isIs_signed() {
        return is_signed;
    }

    public void setIs_signed(boolean is_signed) {
        this.is_signed = is_signed;
    }

    public double getFinish_time() { return this.finish_time; }

    public void setFinish_time(double time) { this.finish_time = time; }

    public double getEdu_start_time() {  return edu_start_time; }

    public void setEdu_start_time(double edu_start_time) { this.edu_start_time = edu_start_time; }

    public double getIcf_start_time() { return icf_start_time; }

    public void setIcf_start_time(double icf_start_time) { this.icf_start_time = icf_start_time; }

    public double getTeachback_start_time() { return teachback_start_time; }

    public void setTeachback_start_time(double teachback_start_time) { this.teachback_start_time = teachback_start_time; }
}
