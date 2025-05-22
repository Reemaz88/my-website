#!/bin/bash

# Watch for changes and push to GitHub
while true; do
    # Check for changes
    if git diff --quiet && git diff --cached --quiet; then
        echo "No changes detected..."
    else
        echo "Changes detected! Pushing to GitHub..."
        git add .
        git commit -m "Auto-update: $(date)"
        git push
        echo "Changes pushed successfully!"
    fi
    # Wait for 30 seconds before checking again
    sleep 30
done 