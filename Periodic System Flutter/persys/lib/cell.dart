import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Cell extends StatelessWidget {
  const Cell({Key? key}) : super(key : key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 80,
      height: 80,
      color: Colors.blue.shade800,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            color: Colors.blue.shade800,
            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
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