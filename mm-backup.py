#!/usr/bin/env python3

import requests
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="data/mybackup.env")

def commentout():

    UPLOAD_LINK_URL = os.getenv("UPLOAD_LINK_URL")
    UPLOAD_API_TOKEN = os.getenv("UPLOAD_API_TOKEN")
    NOTIFY_URL = os.getenv("NOTIFY_URL")

    headers = {
        "accept": "application/json",
        "authorization": f"Bearer {UPLOAD_API_TOKEN}"
    }

    print("アップロードリンクを取得します。")
    response = requests.get(UPLOAD_LINK_URL, headers=headers)
    upload_url = response.json()

upload_url = os.getenv("UPLOAD_LINK_URL")
headers = {}
print("アップロードリンク:", upload_url)

# dataフォルダーをtarコマンドで圧縮する。
print("dataフォルダーを圧縮します。")
os.system("tar czf data.gz data")

# アップロードする
print("アップロードします。")
with open("data.gz", "rb") as f:
    data = {
        'parent_dir': '/',
        'replace': '1',
    }
    files = [
        ("file", ("data.gz", f)),
    ]

    response = requests.post(upload_url, data=data, files=files, headers=headers)

print("アップロードが完了しました。gzファイルを削除します。")
os.remove("data.gz")

print("バックアップ完了！")
