while inotifywait -e close_write -r `pwd`; do au build; done
