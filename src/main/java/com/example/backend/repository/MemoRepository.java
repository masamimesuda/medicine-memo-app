package com.example.backend.repository;

import com.example.backend.Memo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemoRepository extends JpaRepository<Memo, Long> {
    // この中に特別なコードを書かなくても、データの保存や検索ができる基本の機能がすべて自動で備わります
}