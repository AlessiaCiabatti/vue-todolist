vue-todolist
===
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
  - text, una stringa che indica il testo del todo
  - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## SVOLGIMENTO
1. realizzare un array di oggetti con i vari todo

2. Stampare all’interno di una lista HTML un item per ogni todo.
  - Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
    - css proprietà completed per barrare gli elementi

3. Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

4. Predisporre un campo di input testuale e un pulsante “aggiungi”
  - cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti

5. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

## BONUS

6. esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri

7. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

8. se la lista è vuota stampare “Non sono presenti task” al posto della lista