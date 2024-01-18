import React, { useState } from "react";
import "./App.css"; // CSS 파일 임포트
import { FaPencilAlt, FaTrashAlt, FaRegTrashAlt } from 'react-icons/fa';




function BudgetCalculator() {
  // ...상태와 함수들
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState("");
  const [message, setMessage] = useState(""); 
  const [messageType, setMessageType] = useState("");

  const [editIndex, setEditIndex] = useState(-1);
  const [editItemName, setEditItemName] = useState('');
  const [editCost, setEditCost] = useState('');  


  const handleClearItems = () => {
    setItems([]);
    setMessage("모든 항목이 삭제되었습니다.");
    setMessageType("error");
  };


  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditItemName(items[index].name);
    setEditCost(items[index].cost);
  };

  const handleUpdateItem = () => {
    const updateItems = [...items];
    updateItems[editIndex] = { name: editItemName, cost: parseFloat(editCost) };
    setItems(updateItems);
    setEditIndex(-1);
  };
  
  const handleAddItem = () => {
    if (!itemName || !cost) {
        
        setMessage("모든 항목을 입력해 주세요.");
        setMessageType("error");
        return;
    };

    const newItem = {
        name: itemName,
        cost: parseFloat(cost)
    };

    setItems([...items, newItem]);

    setItemName("");
    setCost("");
    setMessage("항목이 추가되었습니다.");
    setMessageType("success");
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index); 

    setItems(newItems);
    setMessage("항목이 삭제되었습니다.");
    setMessageType("error");
  };

  const totalExpense = items.reduce((total, item) => total + item.cost, 0);

  const totalExpenseFormatted = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(totalExpense);
  
  
  
  return (
    <div className="container">
        
        {message && (
        <div className={`message ${messageType === "success" ? "message-success" : "message-error"}`}>
            {message}
            </div>
            )}
      <div className="header">
        <h1>예산 계산기</h1>
      </div>
      <div className="input-group">
        <label htmlFor="itemName">지출 항목</label>
        <input
          id="itemName"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="예) 렌트비"
        />
        <label htmlFor="cost">비용</label>
        <input
          id="cost"
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="비용 (원)"
        />
        <button className="add-btn" onClick={handleAddItem}>제출</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
                <>
                <input
                type="text"
                value={editItemName}
                onChange={(e) => setEditItemName(e.target.value)}
                />
                <input 
                type="number"
                value={editCost}
                onChange={(e) => setEditCost(e.target.value)}
                />
                <button onClick={handleUpdateItem}>업데이트</button>
                </>
            ) : (
                <>
                {item.name} - ₩{item.cost}원
                <button onClick={() => handleEditItem(index)} className="icon-edit">
                    <FaPencilAlt />
                    </button>
                    <button className="delete-btn icon-delete" onClick={() => handleDeleteItem(index)}>
                        <FaTrashAlt />    
                    </button>
                    
                </>
            )}
            
            </li>
        ))}
      </ul>

      <div className="total-expense">
        총 지출: {totalExpenseFormatted} 원
      </div>
        <button onClick={handleClearItems}  className="icon-clear-all">
        모든 항목 지우기<FaRegTrashAlt />
      </button>
      
    </div>
  );
        }

  export default BudgetCalculator;