import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'rows.dart';
import 'cell.dart';

class Index extends StatelessWidget {
  const Index({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(52, 56, 75, 1),
      body: Center(
        child: Container(
          width: MediaQuery.of(context).size.width * 0.8,
          height: MediaQuery.of(context).size.height * 0.9,
          color: Colors.green,
          child: Table(
            children: [
              row1(),
              row2(),
              row3(),
              row4(),
              row5(),
              row6(),
              row7(),
              paddingRow(),
              row8(),
              row9(),
            ],
          )
        ),
      ),
    );
  }
}