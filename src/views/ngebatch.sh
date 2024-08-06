#!/bin/bash

# Looping dari huruf A sampai Z
for ini in {c..z}; do
  # Membuat nama file
  nama_file="{ path: '/lessons/mengenal-huruf/$ini', component: MengenalHuruf$ini/View },"

  # Membuat file
  #touch "$nama_file"

  # Opsional: Menampilkan pesan konfirmasi
  #echo "File $nama_file berhasil dibuat."

  echo $nama_file
done
