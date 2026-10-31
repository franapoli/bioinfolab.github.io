---
title: "Specializzazione di Large Language Models mediante LoRA: un'applicazione al dominio della bioinformatica"
author: Roberto Paduano
degree: Corso di Laurea in Biotecnologie
academic_year: "2025/2026"
date: 2026-10-30
file: paduano.pdf
pic: paduano
---
Il lavoro valuta se la specializzazione di modelli linguistici di piccole e medie dimensioni su un dominio come la bioinformatica porti un vantaggio concreto rispetto ai modelli generalisti. Quattro modelli della famiglia Qwen2.5 (0.5B, 1.5B, 3B e 7B parametri) sono stati adattati con LoRA (Low-Rank Adaptation) su un dataset di 500 coppie domanda-risposta che copre allineamento di sequenze, genomica, NGS, trascrittomica, filogenesi, bioinformatica strutturale e clinica, e confrontati con le versioni native tramite Token F1 e una valutazione semantica di tipo LLM-as-a-Judge. Tutti i modelli adattati superano la propria versione di base: l'accuratezza semantica sale, ad esempio, dal 35% al 74% per il modello da 1.5B e dall'85% al 99% per quello da 7B, mentre il beneficio di LoRA tende a ridursi al crescere della dimensione del modello. L'intera sperimentazione è stata condotta su un comune computer desktop, solo con CPU, con costi energetici e impatto ambientale minimi, mostrando che la specializzazione di modelli linguistici aperti è alla portata anche di studenti e piccoli laboratori.
