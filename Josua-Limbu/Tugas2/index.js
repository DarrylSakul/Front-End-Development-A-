// Nama : Limbu, Josua
let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,
    },
  ];
  
  // let max = Math.max(...person.map(persons => persons.age));
  // let maxValues = person.filter(persons => persons.age == max);
  
  // let min = Math.min(...person.map(persons => persons.age));
  // let minValues = person.filter(persons => persons.age == min);

  // console.log("Paling Tua  Click =>",maxValues);
  // console.log("Paling Muda Click =>",minValues);

// let terbesar = person;
// let terkecil = person;
// for(let a=0;a<person.length;a++)
// {
//   if(terbesar > person[a])
//   {
//       terbesar = person[a]
//       console.log("Paling Tua", terbesar)
//   }

// }
// for(let a=2;a<person.length;a++)
// {
//   if(terkecil > person[a])
//   {
//       terkecil = person[a]
//       console.log("Paling Muda", terkecil)
//   }
// }
let terbesar = person[0];
let terkecil = person[0];
for(let a=0;a<person.length;a++)
{
  if(terbesar > person[a])
  {
      terbesar = person[a]
      console.log("Paling Tua", terbesar)
  }
  if(terkecil < person[a])
  {
      terkecil = person[a]
      console.log("Paling Tua", terbesar)
  }

}


