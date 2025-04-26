# 🧾 Smart Settle

Smart Settle helps you split expenses easily among friends or colleagues!  
It ensures everyone who paid gets reimbursed correctly — using the **minimum number of transactions**.

✅ **Bonus Feature:**  
Download a PDF copy of:
- 📄 **Input Transactions**
- 📄 **Simplified Settlements**

---

## 🚀 Demo

[👉 Try Smart Settle here](https://smartsettle-d5ay.vercel.app/)

---

## Video

https://1drv.ms/v/c/eb1458427a941066/EXr81D-RfJZCkCEyr7fsLDgBy5AcI9Pn4MVcu-7O7D9-WQ

## 📦 How to Clone & Run


# Clone the repository
git clone https://github.com/your-username/smartsettle.git
cd smartsettle

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

```bash
#🏛️ Project Structure

smartsettle/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── classes/
│   ├── components/
│   └── utils/
│       ├── generatePDF.js
│       ├── GraphConfig.js
│       └── minimisecashflow.js
├── App.css
├── App.jsx
├── index.css
├── index.html
├── main.jsx
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── .gitignore
├── eslint.config.js



---
```

# 🛠 Features

- 📈 **Expense Splitter** — Effortlessly split bills and manage group expenses.
- ⚡ **Minimum Transactions** — Settle payments with the fewest number of transactions.
- 📄 **Downloadable PDFs**
  - 📝 Export Input Transactions
  - 🧾 Export Simplified Settlements
- 🧹 **Clean UI** — Simple, minimalistic, and intuitive user experience.
- 🚀 **Real-time Settlements** — Instantly calculate who pays whom for faster settlements.

---

# 📚 Tech Stack

- ⚛️ **Frontend Framework** — React.js (v19)
- ⚡ **Bundler** — Vite (v6)
- 🎨 **UI Library** — Material-UI (MUI)
- 🧠 **Graph Visualization**
  - react-force-graph-2d
  - react-force-graph-3d
- 🌌 **3D Support** — three.js
- 🔧 **Graph Utilities** — d3 (drag, force, zoom, shape, selection)
- 🧭 **Routing** — react-router-dom (v7)
- 🛤️ **Flow Charts** — reactflow
- 📄 **PDF Generation** — jsPDF, jsPDF-AutoTable
- 🧹 **Linting** — ESLint

---


## How does it work?
Approach to solving this problem:
First, we take in all the transactions and exchanges that have happened among the group of people. We use a function which is used to calculate every individual's net balance. 

Based on their net balances, we can segregate the people into 2 categories - 
<ul>
<li>those under credit </li>
<li>those under debit</li>
</ul>


A person is said to come under <i>credit</i> if his/ her net balance is <i>greater than</i> 0. This means that this person has to get his money back. 
Likewise, a person is said to come under <i>debit</i> if his/ her balance is <i>lesser than</i> 0. This means this person owes money to someone else. 
(If the net balance of an individual is 0, that means that he/ she need not give nor receive any money and they have been <i>settled</i>. 
Such people will no longer be taken into consideration for further transaction settlements). 


<i>Eg: If Tarun pays ₹100 to Yash, then we can say that Tarun has to be reimbursed ₹100 which means his net balance is 100 and he is under credit. 
Likewise, Yash who borrowed money has to pay Tarun back ₹100 as he is in debt. So, Yash has a net balance of -100. Once this has been settled, both their balances become 0. </i>

Next, from among the people who are in debit, we pick the person with the <b>largest debit.</b> 
Then, among the people who are under credit, pick the person with the <b>largest credit. </b>
We start off by settling these 2 values. Once they have been settled, we take the person with the next largest credit and the next largest debit and settle these 2. 
This process continues until every person has been settled.

This can be achieved using a <b>Max Heap.</b>  
This is the solution we follow to implement our Cash Flow Minimiser.

---

> ✨ Made with ❤️ by **Lakshmi Raj**
