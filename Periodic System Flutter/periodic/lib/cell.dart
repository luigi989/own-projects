import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Cell extends StatelessWidget {
  const Cell({Key? key}) : super(key : key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      child: Column(
        children: [
          Container(
            color: Colors.blueGrey,
            width: 70,
            padding: const EdgeInsets.symmetric(horizontal: 5),
            child: const Text('1', style: TextStyle(fontSize: 14),),
          ),
          Expanded(child: Container(
              color: Colors.blue,
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: const [
                    Text(
                      'H',
                      style: TextStyle(fontSize: 24),
                    ),
                    Text('1,008'),
                  ],
                ),
              )
          ),)
        ],
      ),
    );
  }
}