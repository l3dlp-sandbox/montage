var Component = require("montage/ui/component").Component,
    Promise = require('montage/core/promise');

exports.Main = Component.specialize(/** @lends Main# */{

    constructor: {
        value: function () {
            this.root = {
                children: [
                    {
                        filename: 'a',
                        isDirectory: true,
                        children: [
                            {
                                filename: 'a.1',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'a.1.1',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'a.1.2',
                                        isDirectory: false
                                    }
                                ]
                            },
                            {
                                filename: 'a.2',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'a.2.1',
                                        isDirectory: true,
                                        children: []
                                    },
                                    {
                                        filename: 'a.2.2',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'a.2.3',
                                        isDirectory: false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        filename: 'b',
                        isDirectory: true,
                        children: [
                            {
                                filename: 'b.1',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'b.1.1',
                                        isDirectory: true,
                                        children: []
                                    },
                                    {
                                        filename: 'b.1.2',
                                        isDirectory: false
                                    }
                                ]
                            },
                            {
                                filename: 'b.2',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'b.2.1',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'b.2.2',
                                        isDirectory: true,
                                        children: []
                                    },
                                    {
                                        filename: 'b.2.3',
                                        isDirectory: false
                                    }
                                ]
                            },
                            {
                                filename: 'b.3',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'b.3.1',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'b.3.2',
                                        isDirectory: true,
                                        children: []
                                    },
                                    {
                                        filename: 'b.3.3',
                                        isDirectory: false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        filename: 'c',
                        isDirectory: true,
                        children: [
                            {
                                filename: 'c.1',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'c.1.1',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'c.1.2',
                                        isDirectory: true,
                                        children: []
                                    }
                                ]
                            },
                            {
                                filename: 'c.2',
                                isDirectory: true,
                                children: [
                                    {
                                        filename: 'c.2.1',
                                        isDirectory: true,
                                        children: []
                                    },
                                    {
                                        filename: 'c.2.2',
                                        isDirectory: false
                                    },
                                    {
                                        filename: 'c.2.3',
                                        isDirectory: false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        }
    }
  
});