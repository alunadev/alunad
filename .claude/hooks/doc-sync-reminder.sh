#!/bin/bash
# doc-sync-reminder.sh
# PostToolUse hook — fires after every Edit or Write.
# If the edited file is a portfolio content file, reminds to update
# docs/how-to-edit-content.md so the content reference stays accurate.

INPUT=$(cat)
FILE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null)

# Skip if the doc itself is being edited (avoid circular reminders)
if echo "$FILE" | grep -q "how-to-edit-content.md"; then
  exit 0
fi

# Portfolio content files that require a doc update when changed
if echo "$FILE" | grep -qE \
  "(hero-section|dynamic-island|footer-section)\.tsx$|portfolio-data\.ts$|content/case-studies/.*\.mdx$"; then
  echo ""
  echo "┌─ DOC SYNC REMINDER ────────────────────────────────────────────┐"
  echo "│ '$FILE'"
  echo "│ is a portfolio content file."
  echo "│"
  echo "│ Update docs/how-to-edit-content.md → 'Current content' for   │"
  echo "│ the relevant section so the reference stays accurate.         │"
  echo "└────────────────────────────────────────────────────────────────┘"
fi
