
## Objective
To automate the creation and filing of daily task notes in Obsidian, eliminating the need for manual date entry and folder organization.

## Initial Setup

### Required Plugins
1. Templater
2. Calendar (optional, but useful for navigation)

### Folder Structure

Obsidian Vault/  
├── Daily Tasks/  
│ ├── YYYY/  
│ │ └── MM/  
│ │ └── Daily Task - YYYY-MM-DD.md  
├── Templates/  
└── scripts/


## Implementation Steps

### 1. Create the Template

Create a new file in the Templates folder named "Daily Task Template" with the following content:

```
<% await tp.file.move(await tp.user.create_daily_task()) %>

## created: {{date:YYYY-MM-DD}}

# Daily Task - {{date:YYYY-MM-DD}}

> (insight)

## Main Task

- [ ]  task name
- [ ]  task name
```


### 2. Set Up the Script

Create a new file named `create_daily_task.js` in the `scripts` folder:

```javascript
function createDailyTask() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    const folder = `Daily Tasks/${year}/${month}`;
    const fileName = `Daily Task - ${year}-${month}-${day}`;
    
    // Check if file already exists
    const files = app.vault.getFiles();
    const existingFile = files.find(file => file.path === `${folder}/${fileName}.md`);
    
    if (existingFile) {
        // If file exists, return its path
        return existingFile.path;
    } else {
        // If file doesn't exist, return the new path
        return `${folder}/${fileName}`;
    }
}

module.exports = createDailyTask;
```

### 3. Configure Templater

1. Go to Settings > Templater
2. Enable "Trigger Templater on new file creation"
3. Add your templates folder to "Template folder location"
4. Set the script files location to your `scripts` folder

### 4. Set Up a Hotkey

1. Go to Settings > Hotkeys
2. Find "Templater: Create new note from template"
3. Assign a hotkey (e.g., Ctrl+Shift+D)

## Troubleshooting

If encountering a "Templater Error: Template parsing error" with "Destination file already exists" message:

1. Ensure the script checks for existing files (as in the provided script).
2. Update the template to use `await`:

```
<% await tp.file.move(await tp.user.create_daily_task()) %>

```
3. Clear Obsidian's cache by deleting `.obsidian/plugins/templater-obsidian/main.js.map`
4. Check for conflicts with other plugins like Daily Notes

## Usage

Press the assigned hotkey to automatically:

1. Create a new daily task note
2. Fill in the current date
3. Move the note to the correct folder based on the current year and month

## Benefits

- Saves time by automating repetitive tasks
- Ensures consistent formatting of daily task notes
- Organizes notes into a clear, chronological folder structure
- Prevents duplication by checking for existing files

This setup provides a streamlined workflow for managing daily tasks in Obsidian, increasing productivity and maintaining organization with minimal manual effort.