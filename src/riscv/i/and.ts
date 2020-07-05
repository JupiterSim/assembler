import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32I and instruction. */
export class AND extends RType {
  /**
   * Creates a new RISC-V RV32I and instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'and', 0x33, rd, 0x7, rs1, rs2, 0x0);
  }
}
