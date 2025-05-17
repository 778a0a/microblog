conda init
conda activate pub
poetry run inv compile-scss

# フル機能版
# VENV_DIR=/home/ubuntu/miniconda3/envs/microblog poetry run supervisord -c misc/supervisord.conf -n

# メモリ節約のためincoming/outgoing workerは立ち上げない。
while true; do
    timestamp=$(date '+%Y%m%d_%H%M%S')
    echo --- Start uvicorn at ${timestamp} ---
    datetimestamp=$(date '+%Y%m%d')
    uvicorn app.main:app --host 0.0.0.0 --no-server-header 2>&1 | tee logs/uvicorn_${datetimestamp}.log
done
