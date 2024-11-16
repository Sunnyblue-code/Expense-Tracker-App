# Expense Tracker Application

A modern, user-friendly expense tracking application built with vanilla JavaScript, featuring a glassmorphic UI design. This application helps users manage their personal finances by tracking income and expenses in real-time.

## Features

- **Real-time Balance Tracking**: Instantly view your current balance, total income, and total expenses
- **Transaction Management**:
  - Add new transactions with detailed information
  - Categorize transactions
  - Delete existing transactions
- **Data Persistence**: All transactions are stored in localStorage
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Implements glassmorphism design principles for a contemporary look

## Technology Stack

- **Frontend**:
  - HTML5
  - CSS3 (Custom styling with glassmorphism effects)
  - Vanilla JavaScript (ES6+)
- **Storage**: Browser's localStorage
- **Design**: Custom CSS with glassmorphism effects

## Technical Implementation

### Core Components

1. **ExpenseTracker Class**

   - Manages the core functionality of the application
   - Handles transaction CRUD operations
   - Manages localStorage interactions
   - Updates UI components

2. **Transaction Management**

   - Each transaction includes:
     - Unique ID (timestamp-based)
     - Description
     - Amount
     - Type (income/expense)
     - Category
     - Date

3. **Data Persistence**
   - Utilizes browser's localStorage
   - Automatic data saving on every transaction
   - Data retrieval on page load

### User Interface

1. **Main Sections**

   - Balance overview
   - Income/Expense summary
   - Transaction form
   - Transaction history

2. **Design Features**
   - Glassmorphic card design
   - Responsive grid layout
   - Intuitive form inputs
   - Clear visual hierarchy

## Usage

1. **Adding Transactions**

   - Fill in the transaction description
   - Enter the amount
   - Select transaction type (income/expense)
   - Choose a category
   - Click "Add Transaction"

2. **Viewing Transactions**

   - All transactions are displayed in chronological order
   - Each transaction shows:
     - Description
     - Category
     - Date
     - Amount
     - Delete option

3. **Deleting Transactions**
   - Click the delete button on any transaction to remove it
   - Balance automatically updates

## Installation

1. Clone the repository:
