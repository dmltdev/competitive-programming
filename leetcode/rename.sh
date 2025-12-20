#!/bin/bash

# Recursively rename files and directories that start with "easy.", "medium.", or "hard."
# Example: easy.5.ts -> 5.ts, hard.11 -> 11

# Function to rename items (files and directories)
rename_items() {
    local base_dir="$1"
    
    # Find all files and directories starting with the prefixes
    # Process in reverse depth order (deepest first) to avoid issues with renaming parent dirs
    find "$base_dir" -depth \( -name "easy.*" -o -name "medium.*" -o -name "hard.*" \) | while read -r item; do
        # Get the directory and filename
        dir=$(dirname "$item")
        name=$(basename "$item")
        
        # Remove the prefix (everything up to and including the first dot)
        new_name="${name#*.}"
        
        # Skip if the new name would be empty or the same
        if [ -n "$new_name" ] && [ "$name" != "$new_name" ]; then
            new_path="$dir/$new_name"
            
            # Check if target already exists
            if [ -e "$new_path" ]; then
                echo "Warning: '$new_path' already exists, skipping '$item'"
            else
                echo "Renaming: $item -> $new_path"
                mv "$item" "$new_path"
            fi
        fi
    done
}

# Main execution
if [ $# -eq 0 ]; then
    # No arguments provided, use current directory
    rename_items "."
else
    # Use provided directory
    if [ -d "$1" ]; then
        rename_items "$1"
    else
        echo "Error: '$1' is not a directory"
        exit 1
    fi
fi

echo "Done!"