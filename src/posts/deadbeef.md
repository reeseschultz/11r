---
layout: post
title: Deadbeef Decrementation
excerpt: How to decrement from a magic debug value to zero.
date: 2016-10-09
updatedDate: 2016-10-09
tags:
  - post
  - spirituality
---

```nasm
;run on Linux with: nasm -felf64 decrement.asm && ld decrement.o && ./a.out

global _start

section .text

_start:
  mov rax, 0xDEADBEEF
  call decrement
  call exit

decrement:
  dec rax
  cmp rax, 0
  jg decrement
  ret

exit:
  mov rax, 60
  syscall
``
```
