# 📚 Student Attendance Viewer

A simple React web application to view and manage student attendance records.

## 🎯 What Does This Project Do?

- Displays student information with attendance percentage
- Filter students by Present (≥75%) or Absent (<75%)
- Sort students by attendance percentage
- Select multiple students
- Shows statistics (Total, Present, Absent, Selected count)
- Saves data in browser so it doesn't disappear on refresh

## 🛠️ Technologies Used

- **React** - For building the user interface
- **Axios** - For fetching data from API
- **Tailwind CSS** - For styling
- **localStorage** - For storing data in browser
- **Vite** - For fast development

## 📦 How to Run This Project

1. Open terminal in project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open browser and go to `http://localhost:5173`

## 💡 Key Features

1. **Filter Options:**
   - All - Shows all students
   - Present - Shows students with ≥75% attendance
   - Absent - Shows students with <75% attendance

2. **Sort Feature:**
   - Sorts students from highest to lowest attendance

3. **Multiple Selection:**
   - Click on student cards to select
   - Click again to deselect
   - See selected count in stats

4. **Statistics Dashboard:**
   - Total Students
   - Present Students (≥75%)
   - Absent Students (<75%)
   - Filtered Results
   - Selected Students

5. **Data Persistence:**
   - Data is saved in browser
   - Doesn't disappear on page refresh

## 📁 Project Structure

```
src/
├── App.jsx                          # Main component with logic
├── components/
│   ├── Header.jsx                   # Title and heading
│   ├── StatsPanel.jsx              # Statistics cards
│   ├── FilterControls.jsx          # Filter buttons container
│   ├── FilterButtons.jsx           # All/Present/Absent buttons
│   ├── LowAttendanceToggle.jsx     # Toggle for low attendance
│   ├── SortButton.jsx              # Sort by percentage button
│   ├── ClearSelectionButton.jsx    # Clear selection button
│   ├── StudentList.jsx             # List of student cards
│   ├── StudentCard.jsx             # Individual student card
│   ├── LoadingSpinner.jsx          # Loading animation
│   ├── EmptyState.jsx              # No results message
│   └── Footer.jsx                  # Footer with API credit
```

## 🎓 How to Explain This Project

**Simple Explanation:**
"This is a Student Attendance Viewer built with React. It fetches student data from an API and displays their attendance percentage. Users can filter by Present/Absent, sort by percentage, and select multiple students. The data is stored in the browser's localStorage so it persists across page refreshes."

**Key Points to Mention:**
- Used React hooks (useState, useEffect)
- Fetches data from JSONPlaceholder API
- Implements filtering, sorting, and selection features
- Uses localStorage for data persistence
- Responsive design with Tailwind CSS
- Component-based architecture

## 📊 Data Flow

1. **On page load:**
   - Check if data exists in localStorage
   - If yes, use saved data
   - If no, fetch from API and save to localStorage

2. **Filtering:**
   - Loop through students
   - Check attendance percentage
   - Return matching students

3. **Sorting:**
   - Use bubble sort algorithm
   - Arrange from highest to lowest attendance

4. **Selection:**
   - Store selected student IDs in array
   - Toggle selection on click

## 🔧 API Used

**JSONPlaceholder API**
- URL: `https://jsonplaceholder.typicode.com/users`
- Returns: 10 user objects with name, email, address
- We generate random attendance (40-100%) for each user

## 📝 Important Concepts

### React Hooks Used:

1. **useState:**
   - Manages component state (data that can change)
   - Example: `const [students, setStudents] = useState([])`

2. **useEffect:**
   - Runs code when component loads
   - Used to fetch data from API
   - Empty dependency array `[]` means run only once

### Algorithms Used:

1. **Bubble Sort (for sorting):**
   - Time Complexity: O(n²)
   - Compares adjacent elements
   - Swaps if in wrong order

2. **Linear Search (for filtering):**
   - Time Complexity: O(n)
   - Checks each element once

### Data Structures:

- **Arrays:** Store students, selected IDs
- **Objects:** Store individual student data
- **localStorage:** Browser storage for persistence

## 🎯 Future Improvements

1. Use faster sorting algorithm (Quick Sort - O(n log n))
2. Add search by name feature
3. Export to CSV/PDF
4. Edit attendance percentage
5. Add date-wise attendance tracking
6. Add student photos
7. Pagination for large datasets

## 👨‍💻 Made by a Student

This project was created as part of learning React and web development.

**Skills Demonstrated:**
- React fundamentals
- State management
- API integration
- Component architecture
- Algorithm implementation
- Responsive design

---

For detailed viva preparation, see **VIVA_GUIDE.md** 📖
