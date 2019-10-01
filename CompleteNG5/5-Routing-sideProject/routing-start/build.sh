#!/bin/bash
###########################################################################
#
#                  Unpublished Work Copyright (c) 2013-2015
#                  Trading Technologies International, Inc.
#                       All Rights Reserved Worldwide
#
#          * * *   S T R I C T L Y   P R O P R I E T A R Y   * * *
#
# WARNING:  This program (or document) is unpublished, proprietary property
# of Trading Technologies International, Inc. and is to be maintained in
# strict confidence. Unauthorized reproduction, distribution or disclosure
# of this program (or document), or any program (or document) derived from
# it is prohibited by State and Federal law, and by local law outside of
# the U.S.
#
############################################################################

build_config=$1

# Default build configuration to "production" (see angular.json for other
# options)
if [ -z "$build_config" ]; then
    build_config="production";
fi
#c ->create tar file
#v -> verbosely show progress
#f -> file name. it will use hatchet-A VARIABLE instead of the default tar wold use
#z -> creates a gziped compressed file
#C -> changes it's current directory to the one specified before performing any operations.

# the reason it says to go to the dist/ui in the current directory is because angular creates those directories.
npm run ng build -- --build-optimizer --configuration=$build_config && tar -czvf ROUTING-START-$build_config.tar.gz -C ./dist/ROUTING-START/ .
