import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [memos, setMemos] = useState([]);
  // 今日の日付（YYYY-MM-DD形式）を初期値として取得
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async () => {
    try {
      const response = await fetch('/api/memos');
      const data = await response.json();
      setMemos(data);
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
    }
  };

  const handleAddMemo = async (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    try {
      const response = await fetch('/api/memos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, title, content }),
      });

      if (response.ok) {
        setTitle('');
        setContent('');
        fetchMemos();
      }
    } catch (error) {
      console.error('メモの保存に失敗しました:', error);
    }
  };

  // メモを日付ごとにグループ化する処理
  const groupedMemos = memos.reduce((acc, memo) => {
    const memoDate = memo.date || '日付未設定';
    if (!acc[memoDate]) {
      acc[memoDate] = [];
    }
    acc[memoDate].push(memo);
    return acc;
  }, {});

  // 日付を新しい順（降順）に並べ替え
  const sortedDates = Object.keys(groupedMemos).sort((a, b) => b.localeCompare(a));

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>お薬手帳アプリ（処方箋・メモ一覧）</h1>
      
      <form onSubmit={handleAddMemo} style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h3>お薬を追加</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>処方日：</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            style={{ padding: '5px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="お薬名（例：ロキソニン）" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea 
            placeholder="飲み方・メモ（例：1日3回 毎食後1錠）" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: '8px', width: '100%', height: '80px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          追加する
        </button>
      </form>

      <hr />

      <h3>日付別のお薬一覧</h3>
      {sortedDates.length === 0 ? (
        <p>登録されたお薬がまだありません</p>
      ) : (
        sortedDates.map((groupDate) => (
          <div key={groupDate} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#e9ecef', padding: '10px 15px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
              📅 {groupDate} の処方
            </div>
            <ul style={{ listStyleType: 'none', padding: '15px', margin: 0 }}>
              {groupedMemos[groupDate].map((memo) => (
                <li key={memo.id} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px dashed #eee' }}>
                  <strong style={{ fontSize: '1.1em' }}>💊 {memo.title}</strong>
                  <div style={{ marginTop: '4px', color: '#555', whiteSpace: 'pre-wrap' }}>{memo.content}</div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}

export default App;