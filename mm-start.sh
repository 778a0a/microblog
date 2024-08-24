conda init
conda activate microblog
poetry run inv compile-scss
VENV_DIR=/home/ubuntu/miniconda3/envs/microblog poetry run supervisord -c misc/supervisord.conf -n
