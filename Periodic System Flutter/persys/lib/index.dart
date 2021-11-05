import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'cell.dart';

class Index extends StatelessWidget {
  const Index({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        color: const Color.fromRGBO(52, 56, 75, 1),
        child: Center(
          child: Container(
            width: 70,
            height: 70,
            color: Colors.green,
            child: const Cell(),
          ),
        ),
      ),
    );
  }
}