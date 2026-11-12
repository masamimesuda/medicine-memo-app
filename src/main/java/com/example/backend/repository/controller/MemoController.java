package com.example.backend.controller;

import com.example.backend.Memo;
import com.example.backend.repository.MemoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memos")
@CrossOrigin(origins = "http://localhost:5173") // Reactからのアクセスを許可する設定
public class MemoController {

    private final MemoRepository memoRepository;

    public MemoController(MemoRepository memoRepository) {
        this.memoRepository = memoRepository;
    }

    // 1. メモの一覧を返すAPI
    @GetMapping
    public List<Memo> getAllMemos() {
        return memoRepository.findAll();
    }

    // 2. 新しいメモを保存するAPI
    @PostMapping
    public Memo createMemo(@RequestBody Memo memo) {
        return memoRepository.save(memo);
    }
}